import { ChatKitClient, runGrooveReaderWorkflow } from "./chatkit";

function buildPlaceholderClient(): ChatKitClient {
  return {
    async runWorkflow(workflowId: string, payload?: Record<string, unknown>) {
      return Promise.resolve({
        workflowId,
        message: "ChatKit workflow placeholder response",
        payload,
      });
    },
  };
}

function setUpLandingPage(): void {
  const outputElement = document.querySelector<HTMLElement>(".groove-reader-output");
  const button = document.querySelector<HTMLButtonElement>("button#grok-list-rules");

  if (!outputElement || !button) {
    return;
  }

  button.addEventListener("click", async () => {
    const client = buildPlaceholderClient();
    const response = await runGrooveReaderWorkflow(client, { action: "list_rules" });
    outputElement.textContent = JSON.stringify(response, null, 2);
  });
}

window.addEventListener("DOMContentLoaded", () => {
  setUpLandingPage();
});
