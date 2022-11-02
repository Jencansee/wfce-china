export type field = string;

export interface errorsInterface {
	[key: field]: {
		dirty: boolean;
		message: string;
	}
}

export type form = {
	[key: field]: string;
}

export interface validateFormInterface {
	form: form,
	field?: field,
	errors: errorsInterface
}
