import { ExtensionContext } from "vscode";
import { LanguageClient } from "vscode-languageclient/node";

let client: LanguageClient;
export function activate(context: ExtensionContext) {
	client.start();
}

export function deactivate(): Thenable<void> | undefined {
	if (!client) {
		return undefined;
	}
	return client.stop();
}
