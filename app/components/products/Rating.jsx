import "./rating.css";

export default function Rating({ value }) {
  const filledStars = Math.floor(value);
  const hasHalfStar = value % 1 !== 0;
  const stars = [];

  for (let i = 1; i <= 5; i++) {
    if (i <= filledStars) {
      stars.push(
        <svg
          key={i}
          className="star"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
        >
          <path d="M12 2.75l2.792 6.854h7.208l-5.833 4.48 2.792 6.854-5.833-4.48-5.833 4.48 2.792-6.854-5.833-4.48h7.208z" />
        </svg>
      );
    } else if (i === filledStars + 1 && hasHalfStar) {
      stars.push(
        <svg
          key={i}
          className="star half-filled"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
        >
          <path d="M12 2.75l2.792 6.854h7.208l-5.833 4.48 2.792 6.854-5.833-4.48-5.833 4.48 2.792-6.854-5.833-4.48h7.208z" />
          <path d="M17.958 12l-1.958 1.5v6.25l1.958-1.5v-6.25zm-11.916 0l-1.958 1.5v6.25l1.958-1.5v-6.25z" />
        </svg>
      );
    } else {
      stars.push(
        <svg
          key={i}
          className="star empty"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
        >
          <path d="M12 2.75l2.792 6.854h7.208l-5.833 4.48 2.792 6.854-5.833-4.48-5.833 4.48 2.792-6.854-5.833-4.48h7.208z" />
        </svg>
      );
    }
  }

  return <div className="rating">{stars}</div>;
}
