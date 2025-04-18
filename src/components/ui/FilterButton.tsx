type FilterButtonProps = {
  active: boolean;
  label: string;
  onClick: () => void;
};

const FilterButton = ({ active, label, onClick }: FilterButtonProps) => {
  return (
    <button
      onClick={onClick}
      className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
        active
          ? 'bg-primary-600 text-white'
          : 'bg-neutral-100 text-neutral-700 hover:bg-neutral-200'
      }`}
    >
      {label}
    </button>
  );
};

export default FilterButton;