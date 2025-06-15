export default function InfoWithTitle({
  title,
  info,
}: {
  title: string;
  info: string;
}) {
  return (
    <div className="flex flex-col gap-0.5">
      <p className="text-sm text-muted-foreground">{title}</p>
      <p className="text-md leading-snug">{info}</p>
    </div>
  );
}
