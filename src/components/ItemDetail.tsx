import { useParams, NavLink, Outlet } from "react-router";
import useSWR from "swr";
import { fetcher } from "../lib/api";

function ItemDetail() {
  const { id } = useParams();

  const { data, error } = useSWR(
    "https://pokeapi.co/api/v2/pokemon/ditto",
    fetcher,
  );

  if (error) return <div>Failed to load</div>;

  return (
    <div style={{ padding: "20px" }}>
      <h2>Item Detail - ID: {id}</h2>

      <nav style={{ marginBottom: "20px", display: "flex", gap: "10px" }}>
        <NavLink
          to={`/item/${id}`}
          end
          style={({ isActive }) => ({
            padding: "8px 16px",
            backgroundColor: isActive ? "#007bff" : "#f0f0f0",
            color: isActive ? "white" : "black",
            textDecoration: "none",
            borderRadius: "4px",
          })}
        >
          詳細
        </NavLink>
        <NavLink
          to={`/item/${id}/delete`}
          style={({ isActive }) => ({
            padding: "8px 16px",
            backgroundColor: isActive ? "#dc3545" : "#f0f0f0",
            color: isActive ? "white" : "black",
            textDecoration: "none",
            borderRadius: "4px",
          })}
        >
          削除
        </NavLink>
        <NavLink
          to={`/item/${id}/update`}
          style={({ isActive }) => ({
            padding: "8px 16px",
            backgroundColor: isActive ? "#28a745" : "#f0f0f0",
            color: isActive ? "white" : "black",
            textDecoration: "none",
            borderRadius: "4px",
          })}
        >
          更新
        </NavLink>
      </nav>

      <div
        style={{
          padding: "20px",
          backgroundColor: "#f8f9fa",
          borderRadius: "4px",
          minHeight: "200px",
        }}
      >
        <Outlet />
      </div>
    </div>
  );
}

export default ItemDetail;
