import { beforeEach, describe, expect, it, vi } from "vitest";
import * as chatkitModule from "./chatkit";

const mockResponse = {
  workflowId: "workflow_placeholder_id",
  message: "ChatKit workflow placeholder response",
  payload: { action: "list_rules" },
};

beforeEach(() => {
  document.body.innerHTML = `
    <pre class="groove-reader-output"></pre>
    <button id="grok-list-rules">List rules</button>
  `;
  vi.restoreAllMocks();
});

describe("landing page", () => {
  it("renders the workflow response when the button is clicked", async () => {
    vi.spyOn(chatkitModule, "runGrooveReaderWorkflow").mockResolvedValue(mockResponse);
    await import("./main");

    window.dispatchEvent(new Event("DOMContentLoaded"));

    document.querySelector("#grok-list-rules")?.dispatchEvent(new Event("click"));
    await Promise.resolve();
    await Promise.resolve();

    expect(document.querySelector(".groove-reader-output")?.textContent).toBe(
      JSON.stringify(mockResponse, null, 2),
    );
  });
});
