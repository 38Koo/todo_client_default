import { Link } from "react-router";
import useSWR from "swr";
import { fetcher } from "../lib/api";

type Item = {
  id: string;
  title: string;
  content: string;
  isCompleted: boolean;
};

type ItemResponse = {
  items: Item[];
};

export const ItemList = () => {
  const { data, error } = useSWR<ItemResponse>(
    `${import.meta.env.VITE_API_BASE_URL}/api/items`,
    fetcher,
  );

  if (error) return <div style={{ padding: "20px" }}>読み込みに失敗しました</div>;
  if (!data) return <div style={{ padding: "20px" }}>読み込み中...</div>;

  return (
    <div style={{ maxWidth: "800px", margin: "0 auto", padding: "20px" }}>
      <h1 style={{ marginBottom: "24px" }}>TODO一覧</h1>

      {data.items.length === 0 ? (
        <p>TODOアイテムはありません。</p>
      ) : (
        <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
          {data.items.map((item) => (
            <li
              key={item.id}
              style={{
                padding: "16px",
                marginBottom: "8px",
                backgroundColor: "#f8f9fa",
                borderRadius: "8px",
                borderLeft: item.isCompleted
                  ? "4px solid #28a745"
                  : "4px solid #007bff",
              }}
            >
              <Link
                to={`/item/${item.id}`}
                style={{ textDecoration: "none", color: "inherit", display: "block" }}
              >
                <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
                  <span
                    style={{
                      fontSize: "14px",
                      fontWeight: "bold",
                      padding: "2px 8px",
                      borderRadius: "4px",
                      backgroundColor: item.isCompleted ? "#28a745" : "#007bff",
                      color: "#fff",
                      whiteSpace: "nowrap",
                    }}
                  >
                    {item.isCompleted ? "完了" : "未完了"}
                  </span>
                  <span
                    style={{
                      fontSize: "18px",
                      fontWeight: "bold",
                      textDecoration: item.isCompleted ? "line-through" : "none",
                      opacity: item.isCompleted ? 0.6 : 1,
                    }}
                  >
                    {item.title}
                  </span>
                </div>
                {item.content && (
                  <p
                    style={{
                      margin: "8px 0 0",
                      fontSize: "14px",
                      opacity: 0.7,
                      overflow: "hidden",
                      textOverflow: "ellipsis",
                      whiteSpace: "nowrap",
                    }}
                  >
                    {item.content}
                  </p>
                )}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};
