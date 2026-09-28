/*
 * AI Assistance Disclosure:
 * Tool: GitHub Copilot, date: 2026-09-28
 * Scope: Reused the mockup's Logo and Button components while replacing demo state with live order loading.
 *        No requirements, architecture, schema, or API decisions were made by the AI tool.
 * Author review:
 */
import { useEffect, useState } from "react";
import { Link, Route, Routes } from "react-router-dom";
import {
  AlertCircle,
  ArrowRight,
  ClipboardList,
  RefreshCw,
} from "lucide-react";
import Logo from "./components/Logo";
import Button from "./components/Button";
import { backendGaps, fetchOrders } from "./api";

function Layout({ children }) {
  return (
    <div className="flex min-h-screen flex-col">
      <header className="sticky top-0 z-10 border-b border-line bg-white/95 backdrop-blur">
        <div className="page-width page-gutter flex min-h-16 items-center justify-between">
          <Logo />
          <nav
            className="flex items-center gap-2 text-sm"
            aria-label="Primary navigation"
          >
            <Link className="rounded-btn px-3 py-2 hover:bg-surface-alt" to="/">
              Home
            </Link>
            <Link
              className="rounded-btn px-3 py-2 hover:bg-surface-alt"
              to="/orders"
            >
              Orders
            </Link>
          </nav>
        </div>
      </header>
      <main className="flex-1">{children}</main>
      <footer className="border-t border-line py-8">
        <div className="page-width page-gutter text-sm text-ink-40">
          FoC · Friend on Campus
        </div>
      </footer>
    </div>
  );
}

function Home() {
  return (
    <section className="page-width page-gutter py-16 md:py-24">
      <div className="max-w-2xl foc-rise">
        <p className="mb-4 text-sm font-medium text-orange">Friend on Campus</p>
        <h1 className="font-display text-4xl font-bold md:text-6xl">
          Get it fetched.
        </h1>
        <p className="mt-6 max-w-prose text-lg text-ink-70">
          A real-time starting point for campus errands, backed by the services
          already running in this repository.
        </p>
        <div className="mt-8 flex flex-wrap gap-3">
          <Button as={Link} to="/orders">
            View live orders <ArrowRight size={16} />
          </Button>
          <Button as={Link} to="/status" variant="secondary">
            Backend status
          </Button>
        </div>
      </div>
    </section>
  );
}

function Orders() {
  const [orders, setOrders] = useState([]);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(true);

  async function loadOrders() {
    setLoading(true);
    setError("");
    try {
      setOrders(await fetchOrders());
    } catch (cause) {
      setError(cause.message);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    loadOrders();
  }, []);

  return (
    <section className="page-width page-gutter py-12">
      <div className="mb-8 flex flex-wrap items-end justify-between gap-4">
        <div>
          <p className="text-sm text-ink-40">Live data</p>
          <h1 className="font-display text-3xl font-bold">Open orders</h1>
        </div>
        <Button
          size="sm"
          variant="secondary"
          onClick={loadOrders}
          disabled={loading}
        >
          <RefreshCw size={16} /> Refresh
        </Button>
      </div>
      {error && (
        <div className="product-panel mb-5 flex gap-3 text-alert">
          <AlertCircle size={20} />
          <span>Could not load orders: {error}</span>
        </div>
      )}
      {!loading && !error && orders.length === 0 && (
        <div className="product-panel text-center">
          <ClipboardList className="mx-auto mb-3 text-ink-40" />
          <p className="font-medium">No orders are available yet.</p>
          <p className="mt-1 text-sm text-ink-40">
            This state is backed by the order service, not demo records.
          </p>
        </div>
      )}
      <div className="grid gap-4 md:grid-cols-2">
        {orders.map((order) => (
          <article className="product-panel" key={order.id}>
            <div className="flex items-start justify-between gap-4">
              <h2 className="font-semibold">{order.description}</h2>
              <span className="rounded-pill border border-line px-3 py-1 text-sm tnum">
                {order.credits} cr
              </span>
            </div>
            <p className="mt-4 text-sm text-ink-70">
              Deliver to {order.deliveryLocation}
            </p>
            <p className="mt-2 text-sm text-ink-40">Status: {order.status}</p>
          </article>
        ))}
      </div>
    </section>
  );
}

function Status() {
  return (
    <section className="page-width page-gutter py-12">
      <h1 className="font-display text-3xl font-bold">Backend status</h1>
      <p className="mt-3 max-w-prose text-ink-70">
        The frontend currently connects to the existing order list endpoint.
        These product areas need backend work before they can be connected:
      </p>
      <ul className="mt-6 grid gap-3 md:grid-cols-3">
        {backendGaps.map((gap) => (
          <li className="product-panel text-sm" key={gap}>
            {gap}
          </li>
        ))}
      </ul>
    </section>
  );
}

export default function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/orders" element={<Orders />} />
        <Route path="/status" element={<Status />} />
      </Routes>
    </Layout>
  );
}
