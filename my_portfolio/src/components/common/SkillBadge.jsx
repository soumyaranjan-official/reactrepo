// src/components/common/SkillBadge.jsx
const SkillBadge = ({ skill }) => {
  return (
    <span className="bg-black bg-opacity-50 text-white px-3 py-1 rounded-md text-sm">
      {skill}
    </span>
  );
};

export default SkillBadge;