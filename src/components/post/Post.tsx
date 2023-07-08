export const Post = ({ title, body }: { title?: string; body?: string }) => {
  return (
    <div className="border border-white shadow-lg rounded-lg p-4 flex flex-col gap-4">
      <h1 className="font-semibold text-xl">{title || "-"}</h1>
      <p>{body || "-"}</p>
    </div>
  );
};
