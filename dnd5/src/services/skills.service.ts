import { Skill, updateSkill } from '@data/redux/slices/skills.slice';
import { store } from '@data/redux/store';

const update = (changes: Partial<Omit<Skill, 'id'>>, id: string) => {
  store.dispatch(
    updateSkill({
      id,
      changes,
    }),
  );
};

const SkillService = {
  update,
};

export default SkillService;
