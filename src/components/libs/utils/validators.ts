const PROJECT_NAME = /^[a-zA-Z0-9._]{1,30}$/;

export const validateProjectName = (input: string): boolean => {
    return PROJECT_NAME.test(input)
}