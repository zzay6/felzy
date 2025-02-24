function capitalizeFirstLetter(str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

export default function timeAgo(date) {
  const now = new Date();
  const past = new Date(date);
  const diffInSeconds = Math.floor((now - past) / 1000);

  const rtf = new Intl.RelativeTimeFormat("id", { numeric: "auto" });

  if (diffInSeconds < 60)
    return capitalizeFirstLetter(rtf.format(-diffInSeconds, "second"));
  const diffInMinutes = Math.floor(diffInSeconds / 60);
  if (diffInMinutes < 60)
    return capitalizeFirstLetter(rtf.format(-diffInMinutes, "minute"));
  const diffInHours = Math.floor(diffInMinutes / 60);
  if (diffInHours < 24)
    return capitalizeFirstLetter(rtf.format(-diffInHours, "hour"));
  const diffInDays = Math.floor(diffInHours / 24);
  if (diffInDays < 7)
    return capitalizeFirstLetter(rtf.format(-diffInDays, "day"));
  const diffInWeeks = Math.floor(diffInDays / 7);
  if (diffInWeeks < 4)
    return capitalizeFirstLetter(rtf.format(-diffInWeeks, "week"));
  const diffInMonths = Math.floor(diffInDays / 30);
  if (diffInMonths < 12)
    return capitalizeFirstLetter(rtf.format(-diffInMonths, "month"));
  const diffInYears = Math.floor(diffInDays / 365);

  return capitalizeFirstLetter(rtf.format(-diffInYears, "year"));
}
