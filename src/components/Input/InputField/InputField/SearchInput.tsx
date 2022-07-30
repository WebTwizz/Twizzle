import React from "react";
import { Box } from "../../../Box/Box";
import { Button } from "../../../General/Button";
import TextInput, { InputProps } from "./TextInput";
import { BiSearch } from "react-icons/bi";

interface SearchInputProps extends InputProps {
  /**
   * onSearch Callback method
   */
  onSearch?: () => void;
  /**
   * Display loader if true
   */
  isLoading?: boolean;
}

const SearchInput: React.FC<SearchInputProps> = ({
  onSearch,
  size = "medium",
  inputLabel,
  inputLabelDescription,
  errorMessage,
  isLoading,
  ...props
}) => {
  const sizeAttributes = {
    small: {
      padding: "6.625px",
      fontSize: "12px",
      labelMargin: "2px",
      descriptionFontSize: "10px",
    },
    medium: {
      padding: "11.625px",
      fontSize: "14px",
      labelMargin: "4px",
      descriptionFontSize: "12px",
    },
    large: {
      padding: "16.625px",
      fontSize: "16px",
      labelMargin: "6px",
      descriptionFontSize: "14px",
    },
  };

  return (
    <Box
      style={{
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
      }}
    >
      
      <TextInput
        style={{
          width: "100%",
          borderRadius: "5px 0px 0px 5px",
        }}
        size={size}
        {...props}
      />
      <Button
        label={""}
        icon={<BiSearch />}
        style={{
          margin: "0px",
          padding: sizeAttributes[size].padding,
          borderRadius: "0px 5px 5px 0px",
        }}
        isLoading={isLoading}
        onClick={() => onSearch?.()}
      />
    </Box>
  );
};

export default SearchInput;
