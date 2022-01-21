import { MainAddButton } from "../style";

const AddButton = ({ setClose }) => {
  return (
    <MainAddButton onClick={() => setClose(false)}>Add New Pizza</MainAddButton>
  );
};

export default AddButton;
