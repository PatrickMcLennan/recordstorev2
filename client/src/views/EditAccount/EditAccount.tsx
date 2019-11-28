import React from 'react';
import { RouteComponentProps } from 'react-router-dom';

export interface IEditAccountProps extends RouteComponentProps<{ userId: string }> {}

import usePageMount from 'Hook/usePageMount';

const EditAccount: React.FC<IEditAccountProps> = (props: IEditAccountProps) => {
  usePageMount('Edit Account');
  return <main>edit account</main>;
};

export default EditAccount;
