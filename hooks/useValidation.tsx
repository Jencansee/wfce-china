import { useState } from "react";
import type { form, errorsInterface, validateFormInterface } from './useValidation.d';

export const useLoginFormValidator = (
	form: form
) => {
  const [errors, setErrors] = useState<errorsInterface>({
    email: {
      dirty: false,
      message: "",
    },
    name: {
      dirty: false,
      message: "",
    },
  });


  const validateForm = ({ 
		form, field, 
		errors, forceTouchErrors = true
	}: validateFormInterface) => {
    let isNotValid = true;

    // Create a deep copy of the errors
    let nextErrors: errorsInterface = JSON.parse(JSON.stringify(errors));

    if (forceTouchErrors) nextErrors = touchErrors(errors);

    const { email, name } = form;

    if (nextErrors.email.dirty && (field ? field === "email" : true)) {
			let emailRegEx = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      const emailMessage = emailRegEx.test(email) ? '' : 'Email is not valid';
			nextErrors.email.message = emailMessage;
      
			if (!!emailMessage) isNotValid = true;
			else isNotValid = false;
    }

    if (nextErrors.name.dirty && (field ? field === "name" : true)) {
      const nameMessage = name.length < 6 ? 'Name must be at least 6 characters long' : '';
      nextErrors.name.message = nameMessage;
      if (!!nameMessage) isNotValid = true;
			else isNotValid = false;
    }

    setErrors(nextErrors);

    return {
      isNotValid, errors: nextErrors
    };
  };


	const touchErrors = (errors: errorsInterface) => (
		Object.entries(errors).reduce((
			acc: errorsInterface, 
			[field, fieldError]
		) => {
			acc[field] = {
				...fieldError,
				dirty: true,
			};

			return acc;
		}, {})
	);

  const onBlurField = (target: HTMLInputElement) => {
    const field = target.name;
    const fieldError = errors[field];
    if (fieldError.dirty) return;

    const updatedErrors = {
      ...errors,
      [field]: {
        ...errors[field],
        dirty: true,
      },
    };

    validateForm({ form, field, errors: updatedErrors });
  };

  return {
    validateForm,
    onBlurField,
    errors
  };
};