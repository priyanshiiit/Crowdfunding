import styles from "./styles/shimmer.module.css";

const Shimmer = () => {
  return (
    <div className={styles.shimmerCardList}>
      {Array(4).fill("").map((e,index)=>{
        return <div key={index} className={`col-md-5 col-sm-7 p-0 ${styles.shimmerCard}`}></div>
      })}
    </div>
  );
};

export default Shimmer
