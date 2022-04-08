const LikeImage = ({ liked }) => {
  return (
    <svg
      width="18"
      height="16"
      viewBox="0 0 18 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M9 14.9734L8.97384 15L2.20212 8.11925C0.599294 6.49063 0.599294 3.8501 2.20212 2.22147C3.80494 0.592843 6.40363 0.592843 8.00645 2.22147L9 3.23101L9.99355 2.22147C11.5964 0.592843 14.1951 0.592843 15.7979 2.22147C17.4007 3.8501 17.4007 6.49063 15.7979 8.11925L9.02616 15L9 14.9734V14.9734Z"
        stroke={liked ? "#EB5757" : "#8F93A1"}
        fill={liked ? "#EB5757" : "none"}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};
export default LikeImage;
