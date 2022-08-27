// const useFormBuilder = ({ handleChange, handleFocus, formData, formController }) => {
//   const { selectionInputData } = useContext(SelectionInputContext);
//   const { control } = formController;
//   return formData.map((input) => {
//     return inputsComponents(input, control, handleFocus, handleChange, selectionInputData);
//   });
// };

// export default useFormBuilder;

// const inputsComponents = (input, control, handleChange, handleFocus, selectionInputData) => {
//   const inputs = {
//     text: <TextInput key={input.name} {...input} control={control} />,
//     selection: (
//       <SelectionInput
//         {...input}
//         control={control}
//         key={input.name}
//         options={selectionInputData[input.name]}
//         onfocus={() => {
//           console.log("focus happened");
//           handleFocus[input.name]();
//         }}
//         changeHandler={(value) => {
//           console.log("change happened");
//           // handleChange[input.name](value);
//         }}
//       />
//     ),
//   };
//   return inputs[input.type];
// };
