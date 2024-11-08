export const validateString = (
  value: unknown,
  maxLength: number,
): value is string => {
  if (!value || typeof value !== 'string' || value.length > maxLength) {
    return false;
  }

  return true;
};

export const getErrorMessage = (error: unknown): string => {
  let message: string;

  if (error instanceof Error) {
    message = error.message;
  } else if (error && typeof error === 'object' && 'message' in error) {
    message = String(error.message);
  } else if (typeof error === 'string') {
    message = error;
  } else {
    message = 'Something went wrong';
  }

  return message;
};

export const textTypingEffect = (element: HTMLElement, text: string, i = 0) => {
  if (i === 0) {
    element.textContent = '';
  }
  element.textContent = text.slice(0, i + 1);
  if (i === text.length - 1) {
    return;
  }
  setTimeout(() => textTypingEffect(element, text, i + 1), 100);
};
