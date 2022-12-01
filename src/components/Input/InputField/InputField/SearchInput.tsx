import React, { useContext } from "react";
import TextInput, { InputProps } from "./TextInput";
import { BiSearch } from "react-icons/bi";
import { ThemeContext, Typography } from "../../../..";
import { greyBackgroundColor } from "../../../constants";

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
  disabled,
  width,
  size = "medium",
  inputLabel,
  inputLabelDescription,
  errorMessage,
  isLoading,
  style,
  ...props
}) => {
  const sizeAttributes = {
    small: {
      defaultWidth: "25%",
    },
    medium: {
      defaultWidth: "35%",
    },
    large: {
      defaultWidth: "50%",
    },
  };

  const theme = useContext(ThemeContext);

  return (
    
      <TextInput
        size={size}
        disabled={disabled}
        placeholder="Search"
        onEnter={onSearch}
        width={width || sizeAttributes[size].defaultWidth}
        errorMessage={errorMessage}
        leftIcon={
          <BiSearch style={{ color: theme.primary?.backgroundColor }} />
        }
        {...props}
      />
  );
};

export default SearchInput;
