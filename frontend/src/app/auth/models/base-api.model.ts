
export interface IBaseApiErrorResponse {
  errors: Array<IBaseApiError>;
  success: boolean;
}

export interface IBaseApiError {
  code: number;
  key: string;
  class_name: number;
  message: string;
}
