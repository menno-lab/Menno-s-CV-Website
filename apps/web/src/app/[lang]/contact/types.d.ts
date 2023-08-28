export interface ContactFormCopies {
    email: string;
    subject: string;
    message: string;
    submit: string;
    formErrors: {
        emailValidation: string;
        subjectLenght: string;
        messageLength: string;
    };
    formSuccess: {
        title: string;
        message: string;
    };
}
