import React, { useState } from 'react';
import { Editable, EditableInput, EditablePreview } from '@chakra-ui/react';

function Login() {
  const [Login, setLogin] = useState({});

  return (
    <div>
      <Editable value="email" defaultValue="Take some chakra">
        <EditablePreview />
        <EditableInput />
      </Editable>{' '}
    </div>
  );
}

export default Login;
