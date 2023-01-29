import FormInput from '@components/FormInput';
import { damageTypes } from '@data/models/general.data';
import { spellLevels, spellRangeTypes, spellSchools } from '@data/models/spells.data';
import { spellsSelectors } from '@data/redux/slices/spells.slice';
import { RootState, store } from '@data/redux/store';
import Button from '@shared/Button.styles';
import { Field, Form, Formik } from 'formik';
import { merge } from 'lodash';
import React from 'react';
import { connect } from 'react-redux';
import * as Yup from 'yup';
import SpellService from '../services/spells.service';

interface Props {
  close: Function;
  spellId?: string;
}

const SpellSchema = Yup.object().shape({
  name: Yup.string().required('Required'),
});

const SpellModal: React.FC<Props> = ({ close, spellId }) => {
  const spell = spellId ? spellsSelectors.selectById(store.getState(), spellId) : {};

  const defaultValues = {
    casting_time: undefined,
    damage_type: undefined,
    damage: undefined,
    effect: undefined,
    level: 1,
    name: '',
    range_type: undefined,
    range: undefined,
    school: undefined,
  };

  const initialValues = merge(defaultValues, spell);

  return (
    <div className="flex flex-col">
      <Formik
        initialValues={initialValues}
        validationSchema={SpellSchema}
        onSubmit={(data) => {
          if (typeof spellId === 'undefined') {
            SpellService.create(data);
          } else {
            SpellService.update(data, spellId);
          }
          close();
        }}
      >
        {
          ({
            errors, resetForm, setFieldValue, touched,
          }) => (
            <Form>

              <div className="grid grid-cols-2 gap-2 gap-x-3">

                <FormInput label="Name" touched={touched.name} error={errors.name}>
                  <Field name="name" />
                </FormInput>

                <FormInput label="Level">
                  <Field
                    name="level"
                    as="select"
                    onChange={(e: React.FormEvent<HTMLInputElement>) => {
                      setFieldValue(
                        'level',
                        parseInt(e.currentTarget.value, 10),
                      );
                    }}
                  >
                    {
                  spellLevels.map(({ id, createLabel }) => (
                    <option key={id} value={id}>{createLabel}</option>
                  ))
                }
                  </Field>
                </FormInput>

                <FormInput label="Casting time">
                  <Field name="casting_time" placeholder="1A" />
                </FormInput>

                <FormInput label="School">
                  <Field name="school" as="select">
                    <option value={undefined}>–</option>
                    {
                      spellSchools.map(({ id, label }) => (
                        <option key={id} value={id}>{label}</option>
                      ))
                    }
                  </Field>
                </FormInput>

                <FormInput label="Range type">
                  <Field
                    name="range_type"
                    as="select"
                    onChange={(e: React.FormEvent<HTMLInputElement>) => {
                      setFieldValue(
                        'range_type',
                        parseInt(e.currentTarget.value, 10),
                      );
                    }}
                  >
                    {
                      spellRangeTypes.map(({ id, label }) => (
                        <option key={id} value={id}>{label}</option>
                      ))
                    }
                  </Field>
                </FormInput>

                <FormInput label="Range">
                  <Field name="range" placeholder="25" type="number" />
                </FormInput>

                <FormInput label="Damage">
                  <Field name="damage" placeholder="1d6+2" />
                </FormInput>

                <FormInput label="Damage type">
                  <Field
                    name="damage_type"
                    as="select"
                    onChange={(e: React.FormEvent<HTMLInputElement>) => {
                      setFieldValue(
                        'damage_type',
                        parseInt(e.currentTarget.value, 10),
                      );
                    }}
                  >
                    <option value={undefined}>–</option>
                    {
                      Object.entries(damageTypes).map(([key, value]) => (
                        <option
                          key={key}
                          value={key}
                        >
                          {value}
                        </option>
                      ))
                  }
                  </Field>
                </FormInput>

                <div className="col-span-2">
                  <FormInput label="Effect">
                    <Field name="effect" as="textarea" />
                  </FormInput>
                </div>

              </div>

              <div className="flex justify-between w-full mt-6">
                <Button
                  appearance="ghost"
                  onClick={(e) => {
                    close(e);
                    resetForm();
                  }}
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
  spellId: state.sheet.spellModalId,
});

export default connect(mapStateToProps)(SpellModal);
