import { useEffect, useRef } from "react";
import { CustomizeInput } from "./CustomizeInput";
import { Autocomplete } from "@react-google-maps/api";
export const AutocompleteInput = ({ onLoad, ...props }) => {
  const inputRef = useRef();

  useEffect(() => {
    if (inputRef.current) {
      onLoad(inputRef.current);
    }
  }, [onLoad]);

  return (
    <Autocomplete onLoad={onLoad}>
      <CustomizeInput inputRef={inputRef} {...props} />
    </Autocomplete>
  );
};
