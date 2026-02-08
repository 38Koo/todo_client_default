import { useParams, NavLink, Outlet, Link } from "react-router";
import useSWR from "swr";
import { fetcher } from "../lib/api";

type Item = {
  id: string;
  title: string;
  content: string;
  isCompleted: boolean;
};

type ItemResponse = {
  item: Item;
}

function ItemDetail() {
  const { id } = useParams();

  const { data, error } = useSWR<ItemResponse>(
    `${import.meta.env.VITE_API_BASE_URL}/api/items/${id}`,
    fetcher,
  );

  if (error) return <div style={{ padding: "20px" }}>読み込みに失敗しました</div>;
  if (!data) return <div style={{ padding: "20px" }}>読み込み中...</div>;
  
  return (
    <div style={{ maxWidth: "800px", margin: "0 auto", padding: "20px" }}>
      <Link
        to="/"
        style={{
          display: "inline-flex",
          alignItems: "center",
          gap: "4px",
          textDecoration: "none",
          color: "#007bff",
          fontSize: "14px",
          marginBottom: "16px",
        }}
      >
        &larr; TODO一覧に戻る
      </Link>

      <div
        style={{
          backgroundColor: "#fff",
          borderRadius: "8px",
          border: "1px solid #dee2e6",
          padding: "24px",
          marginBottom: "20px",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "20px" }}>
          <span
            style={{
              fontSize: "13px",
              fontWeight: "bold",
              padding: "4px 12px",
              borderRadius: "20px",
              backgroundColor: data.item.isCompleted ? "#28a745" : "#007bff",
              color: "#fff",
            }}
          >
            {data.item.isCompleted ? "完了" : "未完了"}
          </span>
        </div>

        <h2
          style={{
            margin: "0 0 16px",
            fontSize: "24px",
            textDecoration: data.item.isCompleted ? "line-through" : "none",
            opacity: data.item.isCompleted ? 0.6 : 1,
          }}
        >
          {data.item.title}
        </h2>

        {data.item.content ? (
          <div
            style={{
              padding: "16px",
              backgroundColor: "#f8f9fa",
              borderRadius: "6px",
              lineHeight: 1.7,
              whiteSpace: "pre-wrap",
            }}
          >
            {data.item.content}
          </div>
        ) : (
          <p style={{ color: "#6c757d", fontStyle: "italic" }}>内容はありません</p>
        )}
      </div>

      <nav style={{ marginBottom: "20px", display: "flex", gap: "8px" }}>
        <NavLink
          to={`/item/${id}/update`}
          style={({ isActive }) => ({
            padding: "8px 20px",
            backgroundColor: isActive ? "#28a745" : "transparent",
            color: isActive ? "#fff" : "#28a745",
            textDecoration: "none",
            borderRadius: "6px",
            border: isActive ? "1px solid #28a745" : "1px solid #dee2e6",
            fontSize: "14px",
            fontWeight: 500,
          })}
        >
          編集
        </NavLink>
        <NavLink
          to={`/item/${id}/delete`}
          style={({ isActive }) => ({
            padding: "8px 20px",
            backgroundColor: isActive ? "#dc3545" : "transparent",
            color: isActive ? "#fff" : "#dc3545",
            textDecoration: "none",
            borderRadius: "6px",
            border: isActive ? "1px solid #dc3545" : "1px solid #dee2e6",
            fontSize: "14px",
            fontWeight: 500,
          })}
        >
          削除
        </NavLink>
      </nav>
      <Outlet />
    </div>
  );
}

export default ItemDetail;
