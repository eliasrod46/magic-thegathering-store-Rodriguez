//Mensaje de confirmacion de compra de Material UI

import * as React from 'react';
import Alert from '@mui/material/Alert';
import Stack from '@mui/material/Stack';

const MessageSuccess = ({ idCompra }) => {
	return (
		<Stack sx={{ width: '30%', margin: "35px auto" }} spacing={2}>
			<Alert severity='success'>
				Gracias por su compra! su id de transacción es: {idCompra}
			</Alert>
		</Stack>
	);
};

export default MessageSuccess;
