// import { Box } from "@mui/system";
// import { useForm } from "react-hook-form";
// import NewFormBuilder from "./useFormBuilder";
// import useSelectionInputData from "../Hooks/users/useSelectionInputData";
// import { WOP_BASE_URL } from "../util/AdminUrls";
// const formData = [
//   {
//     type: "text",
//     label: "Name",
//     required: true,
//     name: "test",
//   },
//   { type: "selection", name: "province", label: "province" },
//   { type: "selection", name: "county", label: "county" },
// ];

// export const HandleChange = ({ name, value }) => {
//   const logic = useSelectionInputData({});
//   const change = {
//     province: () => {
//       logic.selectionInputClickHandler({
//         url: `${WOP_BASE_URL}`,
//         params: { state: "county", province: value },
//       });
//     },
//   };
//   change[name]();
// };
// export const useHandleFocus = () => {
//   const logic = useSelectionInputData({});
//   const focus = {
//     province: () => {
//       logic.selectionInputClickHandler({
//         url: `${WOP_BASE_URL}`,
//         params: { state: "province" },
//         name: "province",
//       });
//       console.log("focus triggered");
//     },
//   };
//   return { focus };
// };
// export const useHandleChange = () => {
//   const logic = useSelectionInputData({});
//   const change = {
//     province: (value) => {
//       logic.selectionInputClickHandler({
//         url: `${WOP_BASE_URL}`,
//         params: { state: "county", province: value },
//         name: "county",
//       });
//       console.log("change triggered");
//     },
//   };
//   return { change };
// };
// const TestForm = () => {
//   const formController = useForm();
//   const { focus } = useHandleFocus();
//   const { change } = useHandleChange();
//   return (
//     <Box>
//       <NewFormBuilder
//         handleChange={change}
//         handleFocus={focus}
//         formData={formData}
//         formController={formController}
//       />
//     </Box>
//   );
// };

// export default TestForm;
