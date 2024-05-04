export const getInitials = (name: string) => {
  if (!name) return "";

  return name
    .split(/\W+/)
    .map((word) => word[0])
    .join("")
    .toUpperCase();
};
