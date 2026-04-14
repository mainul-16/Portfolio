import { useState, useEffect } from "react";

export default function Browser() {
  const [url, setUrl] = useState<string>("");
  const [image, setImage] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);
  const [progress, setProgress] = useState<number>(0);
  const [status, setStatus] = useState<string>("Ready");
  const [blink, setBlink] = useState<boolean>(true);

  // blinking cursor
  useEffect(() => {
    const interval = setInterval(() => {
      setBlink((prev) => !prev);
    }, 500);
    return () => clearInterval(interval);
  }, []);

  // 🔥 FIXED NAVIGATION FUNCTION
  const navigate = (newUrl: string) => {
    let formattedUrl = newUrl;
    if (!newUrl.startsWith("http")) {
      formattedUrl = "https://www." + newUrl;
    }

    setUrl(newUrl);
    loadPage(formattedUrl);
  };

  const loadPage = async (customUrl?: string) => {
    const targetUrl = customUrl || url;
    if (!targetUrl) return;

    let formattedUrl = targetUrl;
    if (!targetUrl.startsWith("http")) {
      formattedUrl = "https://www." + targetUrl;
    }

    setLoading(true);
    setStatus("Connecting to " + formattedUrl + "...");
    setProgress(10);
    setImage("");

    // fake progress
    let fakeProgress = 10;
    const interval = setInterval(() => {
      fakeProgress += Math.random() * 15;
      if (fakeProgress >= 90) fakeProgress = 90;
      setProgress(fakeProgress);
    }, 300);

    const res = await fetch("https://portfolio-4r24.onrender.com/browse", {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
  },
  body: JSON.stringify({ url: formattedUrl }),
});

      const data: { image: string } = await res.json();

      clearInterval(interval);
      setProgress(100);
      setStatus("Done");

      setImage(data.image);
    } catch (err) {
      clearInterval(interval);
      setStatus("The page cannot be displayed");
    }

    setLoading(false);
  };

  return (
    <div
      style={{
        width: 800,
        background: "#c0c0c0",
        border: "2px solid black",
        fontFamily: "Tahoma, sans-serif",
        fontSize: 12,
      }}
    >
      {/* Menu Bar */}
      <div style={{ display: "flex", gap: 12, padding: "2px 6px", borderBottom: "1px solid #808080" }}>
        <span>File</span>
        <span>Edit</span>
        <span>View</span>
        <span>Favorites</span>
        <span>Tools</span>
        <span>Help</span>
      </div>

      {/* Toolbar */}
      <div style={{ display: "flex", gap: 6, padding: 4, borderBottom: "2px solid #808080" }}>
        <button>◀</button>
        <button>▶</button>
        <button onClick={() => loadPage()}>⟳</button>
        <button onClick={() => setImage("")}>✖</button>
        <button onClick={() => navigate("google.com")}>🏠</button>
      </div>

      {/* Address Bar */}
      <div style={{ display: "flex", alignItems: "center", gap: 6, padding: 4, borderBottom: "2px solid #808080" }}>
        <span>Address</span>

        <input
          value={url}
          onChange={(e) => setUrl(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && loadPage()}
          placeholder="Enter URL"
          style={{
            flex: 1,
            border: "2px inset #fff",
            padding: "2px",
            background: "white",
          }}
        />

        <button onClick={() => loadPage()}>Go</button>
      </div>

      {/* Content */}
      <div
        style={{
          height: 400,
          background: "#ffffff",
          border: "2px inset #fff",
          display: "flex",
          flexDirection: "column",
        }}
      >
        {/* Progress */}
        {loading && (
          <div
            style={{
              height: 6,
              background: "#000080",
              width: progress + "%",
              transition: "width 0.2s",
            }}
          />
        )}

        {/* Main */}
        <div style={{ flex: 1, padding: 20, overflow: "auto" }}>
          {!image && !loading && (
            <div>
              <h3>🌐 Welcome to the Internet</h3>

              <p>Type a website address in the Address bar.</p>

              <hr />

              <p><b>Popular Websites:</b></p>

              <ul style={{ lineHeight: "1.8" }}>
                <li style={{ color: "blue", cursor: "pointer" }} onClick={() => navigate("github.com")}>
                  Github
                </li>
                <li style={{ color: "blue", cursor: "pointer" }} onClick={() => navigate("microsoft.com")}>
                  Microsoft
                </li>
                <li style={{ color: "blue", cursor: "pointer" }} onClick={() => navigate("cnn.com")}>
                  CNN News
                </li>
              </ul>

              <hr />

              <p><b>Tips:</b></p>
              <ul>
                <li>Press Enter after typing a URL</li>
                <li>Use toolbar buttons to navigate</li>
              </ul>
            </div>
          )}

          {loading && (
            <div>
              <p>{status}</p>
              <p>Loading... {blink && <span>▮</span>}</p>
            </div>
          )}

          {image && (
            <img
              src={`data:image/png;base64,${image}`}
              style={{ width: "100%" }}
            />
          )}
        </div>
      </div>

      {/* Status Bar */}
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          borderTop: "2px solid #808080",
          padding: "2px 6px",
        }}
      >
        <span>{status}</span>
        <span>{loading ? Math.floor(progress) + "%" : ""}</span>
      </div>
    </div>
  );
}