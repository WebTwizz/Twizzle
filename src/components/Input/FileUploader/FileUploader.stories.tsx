//creat Input story
import React from "react";
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { FileUploader } from "./FileUploader";

export default {
    title: 'Components/Input/FileUploader',
    component: FileUploader,
    argTypes: {
        multipleFiles: { control: 'boolean' },
        maxFiles: { control: 'number' },
        disabled: { control: 'boolean' },
    },
} as ComponentMeta<typeof FileUploader>;

    const FileUploaderTemplate: ComponentStory<typeof FileUploader> = ({ multipleFiles, maxFiles, disabled, ...rest }) => {
        return <FileUploader multipleFiles={multipleFiles} maxFiles={maxFiles} disabled={disabled} {...rest} />;
    }

    export const FileUploaderComponent = FileUploaderTemplate.bind({});


