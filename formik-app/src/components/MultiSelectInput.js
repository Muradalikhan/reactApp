import Multiselect from "multiselect-react-dropdown";

export const MultiselectInput = (props) => {
  const { onSelect, options } = props;
  return (
    <Multiselect
      options={options}
      displayValue="option"
      onSelect={onSelect}
      style={{ padding: "10px" }}
      selectedValues
    />
  );
};
