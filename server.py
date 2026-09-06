import http.server
import os
import socket

PORT = 8000


def get_lan_ip() -> str:
    s = socket.socket(socket.AF_INET, socket.SOCK_DGRAM)
    try:
        s.connect(("8.8.8.8", 80))
        return s.getsockname()[0]
    except Exception:
        return "127.0.0.1"
    finally:
        s.close()


class Handler(http.server.SimpleHTTPRequestHandler):
    def end_headers(self) -> None:
        self.send_header("Cache-Control", "no-store")
        super().end_headers()


def main() -> None:
    os.chdir(os.path.dirname(os.path.abspath(__file__)))
    lan_ip = get_lan_ip()
    print("\nAI Agent 成长工作台已启动")
    print(f"本机访问：http://127.0.0.1:{PORT}/")
    print(f"手机访问：http://{lan_ip}:{PORT}/")
    print("手机需要和电脑连同一个 Wi-Fi。按 Ctrl+C 停止。\n")

    with http.server.ThreadingHTTPServer(("0.0.0.0", PORT), Handler) as server:
        server.serve_forever()


if __name__ == "__main__":
    main()
