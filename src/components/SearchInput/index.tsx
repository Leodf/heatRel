import React from "react";
import {
  SearchContainer,
  SearchWrapper,
  InputField,
  SearchBtn,
  SearchIcon,
} from "./styles";

interface InputTextProps {
  text?: string;
  onChangeText: (text: string) => void;
}

export default function SearchInput({ text, onChangeText }: InputTextProps) {
  return (
    <SearchContainer>
      <SearchWrapper>
        <InputField
          value={text}
          onChangeText={onChangeText}
          placeholder="O que voce está procurando?"
          clearButtonMode="always"
          autoCapitalize="none"
          autoCorrect={false}
        />
      </SearchWrapper>
      {/* <SearchBtn onPress={() => console.log(`buscando... ${text}`)}>
        <SearchIcon name="search" />
      </SearchBtn> */}
    </SearchContainer>
  );
}
