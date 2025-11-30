import { describe, expect, it } from "vitest";
import { runGrooveReaderWorkflow, type ChatKitClient } from "./chatkit";

describe("runGrooveReaderWorkflow", () => {
  it("passes the placeholder workflow id to the client", async () => {
    const calls: Array<{ workflowId: string; payload?: Record<string, unknown> }> = [];
    const client: ChatKitClient = {
      async runWorkflow(workflowId, payload) {
        calls.push({ workflowId, payload });
        return { handled: true };
      },
    };

    await runGrooveReaderWorkflow(client, { action: "list_rules" });

    expect(calls[0]).toEqual({
      workflowId: "workflow_placeholder_id",
      payload: { action: "list_rules" },
    });
  });

  it("uses an empty payload when none is provided", async () => {
    let capturedPayload: Record<string, unknown> | undefined;
    const client: ChatKitClient = {
      async runWorkflow(_workflowId, payload) {
        capturedPayload = payload;
        return { handled: true };
      },
    };

    await runGrooveReaderWorkflow(client);

    expect(capturedPayload).toEqual({});
  });
});
