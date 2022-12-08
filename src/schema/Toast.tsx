type Severity = "error" | "success" | "info" | "warning" | undefined;

export type IToast = {
	open: boolean;
	severity: Severity;
	msg: string;
};
