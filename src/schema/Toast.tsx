type Severity = "error" | "success" | "info" | "warning" | undefined;

export interface IToast {
	open: boolean;
	severity: Severity;
	msg: string;
}
