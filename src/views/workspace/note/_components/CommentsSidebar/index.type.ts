export type WisePenCommentAuthorInfo = {
  id?: string;
  name: string;
  avatarUrl?: string;
};

export type WisePenSidebarComment = {
  id: string;
  author: WisePenCommentAuthorInfo;
  createdAt: Date;
  updatedAt: Date;
  content: string;
  reactions: WisePenSidebarCommentReaction[];
  deleted?: boolean;
  canUpdate?: boolean;
};

export type WisePenSidebarCommentReaction = {
  id: string;
  emojiId: string;
  user: WisePenCommentAuthorInfo;
  reactedByCurrentUser: boolean;
};

export type WisePenSidebarThread = {
  id: string;
  referenceText: string;
  resolved: boolean;
  comments: WisePenSidebarComment[];
};

export type WisePenCommentsSidebarActionMode = 'default' | 'history';

export type WisePenCommentsSidebarProps = {
  threads: WisePenSidebarThread[];
  className?: string;
  selectedThreadId?: string;
  maxCommentsBeforeCollapse?: number;
  actionMode?: WisePenCommentsSidebarActionMode;
  actionsEnabled?: boolean;
  emptyText?: string;
  canReopenThread?: (thread: WisePenSidebarThread) => boolean;
  onSelectThread?: (threadId: string) => void;
  onUpdateComment?: (threadId: string, commentId: string, content: string) => void | Promise<void>;
  onDeleteComment?: (threadId: string, commentId: string) => void | Promise<void>;
  onSetCommentReaction?: (
    threadId: string,
    commentId: string,
    emojiId: string
  ) => void | Promise<void>;
  onDeleteCommentReaction?: (threadId: string, commentId: string) => void | Promise<void>;
  onResolveThread?: (threadId: string) => void | Promise<void>;
  onReopenThread?: (threadId: string) => void | Promise<void>;
  onReplyThread?: (threadId: string, content: string) => void | Promise<void>;
};
