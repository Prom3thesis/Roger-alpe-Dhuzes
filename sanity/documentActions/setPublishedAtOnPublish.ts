import {getDraftId, type DocumentActionComponent, type DocumentActionProps, useClient} from "sanity";

const sanityApiVersion = process.env.NEXT_PUBLIC_SANITY_API_VERSION || "2026-05-17";

export function setPublishedAtOnPublish(
  PublishAction: DocumentActionComponent,
): DocumentActionComponent {
  const SetPublishedAtOnPublishAction = (
    props: DocumentActionProps,
  ) => {
    const client = useClient({apiVersion: sanityApiVersion});
    const originalAction = PublishAction(props);

    if (props.type !== "updateEntry" || !originalAction) {
      return originalAction;
    }

    return {
      ...originalAction,
      onHandle: async () => {
        const draftPublishedAt = props.draft?.publishedAt;
        const publishedPublishedAt = props.published?.publishedAt;

        if (!draftPublishedAt && !publishedPublishedAt) {
          await client
            .patch(getDraftId(props.id))
            .setIfMissing({publishedAt: new Date().toISOString()})
            .commit({autoGenerateArrayKeys: true});
        }

        originalAction.onHandle?.();
      },
    };
  };

  SetPublishedAtOnPublishAction.action = PublishAction.action;
  SetPublishedAtOnPublishAction.displayName = "SetPublishedAtOnPublishAction";

  return SetPublishedAtOnPublishAction;
}
