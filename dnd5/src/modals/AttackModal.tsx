import FormInput from '@components/FormInput';
import { attackRangeTypes } from '@data/models/attacks.data';
import { damageTypes } from '@data/models/general.data';
import { attacksSelectors } from '@data/redux/slices/attacks.slice';
import { RootState, store } from '@data/redux/store';
import Button from '@shared/Button.styles';
import { Field, Form, Formik } from 'formik';
import { merge } from 'lodash';
import React from 'react';
import { connect } from 'react-redux';
import * as Yup from 'yup';

interface Props {
  attackId?: string;
  close: React.MouseEventHandler<HTMLButtonElement>;
}

const ItemSchema = Yup.object().shape({
  name: Yup.string().required('Required'),
});

const AttackModal: React.FC<Props> = ({ attackId, close }) => {
  const attack = attackId ? attacksSelectors.selectById(store.getState(), attackId) : {};

  const defaultValues = {
    name: '',
  };

  const initialValues = merge(defaultValues, attack);

  return (
    <div className="flex flex-col">
      <Formik
        initialValues={initialValues}
        validationSchema={ItemSchema}
        onSubmit={(data) => { console.log(data); }}
      >
        {
          ({ errors, touched }) => (
            <Form>

              <div className="grid grid-cols-2 gap-2 gap-x-3">

                <FormInput label="Name" touched={touched.name} error={errors.name}>
                  <Field name="name" />
                </FormInput>

                <FormInput label="Hit bonus">
                  <Field name="hit" placeholder="3" />
                </FormInput>

                <FormInput label="Damage">
                  <Field name="damage" placeholder="1d6+2" />
                </FormInput>

                <FormInput label="Damage type">
                  <Field name="damageType" as="select">
                    <option value={undefined}>–</option>
                    {
                  Object.entries(damageTypes).map(([key, value]) => (
                    <option key={key} value={key}>{value}</option>
                  ))
                }
                  </Field>
                </FormInput>

                <FormInput label="Range type">
                  <Field name="rangeType" as="select">
                    {
                      attackRangeTypes.map(({ id, label }) => (
                        <option key={id} value={id}>{label}</option>
                      ))
                    }
                  </Field>
                </FormInput>

                <FormInput label="Range">
                  <Field name="range" placeholder="25" type="number" />
                </FormInput>

                {/* <div className="col-span-2">
                  <FormInput label="Effect">
                    <Field name="effect" as="textarea" />
                  </FormInput>
                </div> */}

              </div>

              <div className="flex justify-between w-full mt-6">
                <Button
                  appearance="ghost"
                  onClick={close}
                  size="large"
                  type="button"
                >
                  Dismiss
                </Button>
                <Button type="submit" size="large">Save</Button>
              </div>
            </Form>
          )
        }
      </Formik>

    </div>
  );
};

const mapStateToProps = (state: RootState) => ({
  attackId: state.sheet.attackModalId,
});

export default connect(mapStateToProps)(AttackModal);
