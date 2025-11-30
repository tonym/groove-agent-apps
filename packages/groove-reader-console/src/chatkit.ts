export interface ChatKitClient {
  /**
   * Placeholder method signature representing a ChatKit workflow invocation.
   * Replace with the actual ChatKit SDK client when wiring to a real workflow.
   */
  runWorkflow: (workflowId: string, payload?: Record<string, unknown>) => Promise<unknown>;
}

const PLACEHOLDER_WORKFLOW_ID = "workflow_placeholder_id";

/**
 * This function demonstrates how the console will call a ChatKit agent workflow.
 * It currently uses a placeholder workflow ID and returns a stubbed response.
 */
export async function runGrooveReaderWorkflow(
  client: ChatKitClient,
  payload: Record<string, unknown> = {}
): Promise<unknown> {
  return client.runWorkflow(PLACEHOLDER_WORKFLOW_ID, payload);
}
