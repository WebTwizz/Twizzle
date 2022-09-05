//creat Input story
import React from "react";
import { ComponentStory, ComponentMeta } from '@storybook/react';
import FileUploader from "../FileUploader/FileUploader";


export default {
    title: 'Components/Input/FileUploader',
    component: FileUploader,
    argTypes: {
        multipleFiles: { control: 'boolean' },
        maxFileSize: { control: 'number' },
        width: {
            control: {
                type: 'select',
                options: ['100%', '50%', '25%', '10%']
            }
        },
        inputName: {
            control: {
                type: false,
                defaultValue: 'file'
            }
        },
        disabled: { control: 'boolean' },
    },
} as ComponentMeta<typeof FileUploader>;

    const FileUploaderTemplate: ComponentStory<typeof FileUploader> = ({ multipleFiles, disabled, ...rest }) => {
        return <FileUploader multipleFiles={multipleFiles} disabled={disabled} {...rest} />;
    }

    export const FileUploaderComponent = FileUploaderTemplate.bind({});


