import { CircularProgress } from "@mui/material";

export default function LoadingState({height = "100vh"}) {
	return (
		<div
			style={{
				width: '100vw',
				height: height,
				display: 'flex',
				justifyContent: 'center',
				alignItems: 'center',
			}}>
			<CircularProgress />
		</div>
	);
}