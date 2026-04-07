import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { supabase } from "@/integrations/supabase/client";
import { Plus, Trash2, Edit2, LogIn, LogOut, Calendar, FileText, Video, Music } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";

interface KathaBooking {
  id: string;
  title: string;
  description: string | null;
  event_date: string;
  location: string;
  status: string;
}

interface Resource {
  id: string;
  title: string;
  description: string | null;
  type: string;
  url: string;
}

const AdminPage = () => {
  const [user, setUser] = useState<any>(null);
  const [isAdmin, setIsAdmin] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(true);
  const [activeTab, setActiveTab] = useState<"katha" | "resources">("katha");
  const { toast } = useToast();

  // Katha state
  const [kathas, setKathas] = useState<KathaBooking[]>([]);
  const [kathaForm, setKathaForm] = useState({ title: "", description: "", event_date: "", location: "", status: "upcoming" });
  const [editingKatha, setEditingKatha] = useState<string | null>(null);

  // Resource state
  const [resources, setResources] = useState<Resource[]>([]);
  const [resourceForm, setResourceForm] = useState({ title: "", description: "", type: "pdf", url: "" });
  const [editingResource, setEditingResource] = useState<string | null>(null);

  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      setUser(session?.user ?? null);
      if (session?.user) checkAdmin(session.user.id);
      else setLoading(false);
    });

    const { data: { subscription } } = supabase.auth.onAuthStateChange((_event, session) => {
      setUser(session?.user ?? null);
      if (session?.user) checkAdmin(session.user.id);
      else { setIsAdmin(false); setLoading(false); }
    });

    return () => subscription.unsubscribe();
  }, []);

  const checkAdmin = async (userId: string) => {
    const { data } = await supabase.rpc("has_role", { _user_id: userId, _role: "admin" });
    setIsAdmin(!!data);
    setLoading(false);
    if (data) {
      fetchKathas();
      fetchResources();
    }
  };

  const fetchKathas = async () => {
    const { data } = await supabase.from("katha_bookings").select("*").order("event_date", { ascending: true });
    if (data) setKathas(data);
  };

  const fetchResources = async () => {
    const { data } = await supabase.from("resources").select("*").order("created_at", { ascending: false });
    if (data) setResources(data);
  };

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    const { error } = await supabase.auth.signInWithPassword({ email, password });
    if (error) toast({ title: "Login failed", description: error.message, variant: "destructive" });
  };

  const handleLogout = async () => {
    await supabase.auth.signOut();
    setIsAdmin(false);
  };

  // Katha CRUD
  const saveKatha = async (e: React.FormEvent) => {
    e.preventDefault();
    if (editingKatha) {
      const { error } = await supabase.from("katha_bookings").update(kathaForm).eq("id", editingKatha);
      if (error) { toast({ title: "Error", description: error.message, variant: "destructive" }); return; }
      toast({ title: "Katha updated" });
    } else {
      const { error } = await supabase.from("katha_bookings").insert(kathaForm);
      if (error) { toast({ title: "Error", description: error.message, variant: "destructive" }); return; }
      toast({ title: "Katha added" });
    }
    setKathaForm({ title: "", description: "", event_date: "", location: "", status: "upcoming" });
    setEditingKatha(null);
    fetchKathas();
  };

  const deleteKatha = async (id: string) => {
    const { error } = await supabase.from("katha_bookings").delete().eq("id", id);
    if (!error) { toast({ title: "Katha deleted" }); fetchKathas(); }
  };

  const editKatha = (k: KathaBooking) => {
    setKathaForm({ title: k.title, description: k.description || "", event_date: k.event_date, location: k.location, status: k.status });
    setEditingKatha(k.id);
  };

  // Resource CRUD
  const saveResource = async (e: React.FormEvent) => {
    e.preventDefault();
    if (editingResource) {
      const { error } = await supabase.from("resources").update(resourceForm).eq("id", editingResource);
      if (error) { toast({ title: "Error", description: error.message, variant: "destructive" }); return; }
      toast({ title: "Resource updated" });
    } else {
      const { error } = await supabase.from("resources").insert(resourceForm);
      if (error) { toast({ title: "Error", description: error.message, variant: "destructive" }); return; }
      toast({ title: "Resource added" });
    }
    setResourceForm({ title: "", description: "", type: "pdf", url: "" });
    setEditingResource(null);
    fetchResources();
  };

  const deleteResource = async (id: string) => {
    const { error } = await supabase.from("resources").delete().eq("id", id);
    if (!error) { toast({ title: "Resource deleted" }); fetchResources(); }
  };

  const editResource = (r: Resource) => {
    setResourceForm({ title: r.title, description: r.description || "", type: r.type, url: r.url });
    setEditingResource(r.id);
  };

  if (loading) return (
    <div className="min-h-screen">
      <Navbar />
      <div className="pt-28 flex items-center justify-center min-h-[60vh]">
        <div className="animate-spin rounded-full h-12 w-12 border-4 border-primary border-t-transparent" />
      </div>
    </div>
  );

  if (!user) {
    return (
      <div className="min-h-screen">
        <Navbar />
        <div className="pt-28 pb-24 flex items-center justify-center min-h-[70vh]">
          <div className="bg-card rounded-3xl p-10 border border-border/30 shadow-2xl w-full max-w-md">
            <div className="text-center mb-8">
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                <LogIn className="w-8 h-8 text-primary" />
              </div>
              <h1 className="text-2xl font-heading font-bold text-foreground">Admin Login</h1>
              <p className="text-muted-foreground mt-2 text-sm">Sign in to manage content</p>
            </div>
            <form onSubmit={handleLogin} className="space-y-4">
              <Input
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              <Input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
              <Button type="submit" className="w-full bg-cta-gradient hover:opacity-90 rounded-full">
                Sign In
              </Button>
            </form>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  if (!isAdmin) {
    return (
      <div className="min-h-screen">
        <Navbar />
        <div className="pt-28 pb-24 flex items-center justify-center min-h-[70vh]">
          <div className="text-center">
            <h1 className="text-2xl font-heading font-bold text-foreground mb-4">Access Denied</h1>
            <p className="text-muted-foreground mb-6">You don't have admin privileges.</p>
            <Button onClick={handleLogout} variant="outline" className="rounded-full">
              <LogOut className="w-4 h-4 mr-2" /> Sign Out
            </Button>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <div className="pt-28 pb-24">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between mb-8">
            <h1 className="text-3xl md:text-4xl font-heading font-bold text-foreground">
              Admin <span className="text-gradient-saffron">Panel</span>
            </h1>
            <Button onClick={handleLogout} variant="outline" className="rounded-full" size="sm">
              <LogOut className="w-4 h-4 mr-2" /> Sign Out
            </Button>
          </div>

          {/* Tabs */}
          <div className="flex gap-2 mb-8">
            <button
              onClick={() => setActiveTab("katha")}
              className={`flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-medium transition-all ${
                activeTab === "katha"
                  ? "bg-primary text-primary-foreground shadow-lg"
                  : "bg-card text-muted-foreground hover:text-primary border border-border/30"
              }`}
            >
              <Calendar className="w-4 h-4" />
              Katha Bookings
            </button>
            <button
              onClick={() => setActiveTab("resources")}
              className={`flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-medium transition-all ${
                activeTab === "resources"
                  ? "bg-primary text-primary-foreground shadow-lg"
                  : "bg-card text-muted-foreground hover:text-primary border border-border/30"
              }`}
            >
              <FileText className="w-4 h-4" />
              Resources
            </button>
          </div>

          {activeTab === "katha" && (
            <div className="grid lg:grid-cols-3 gap-8">
              {/* Form */}
              <div className="lg:col-span-1">
                <form onSubmit={saveKatha} className="bg-card rounded-3xl p-6 border border-border/30 shadow-lg space-y-4">
                  <h2 className="font-heading font-bold text-lg text-foreground">
                    {editingKatha ? "Edit Katha" : "Add New Katha"}
                  </h2>
                  <Input placeholder="Title" value={kathaForm.title} onChange={(e) => setKathaForm({ ...kathaForm, title: e.target.value })} required />
                  <Textarea placeholder="Description" value={kathaForm.description} onChange={(e) => setKathaForm({ ...kathaForm, description: e.target.value })} />
                  <Input type="date" value={kathaForm.event_date} onChange={(e) => setKathaForm({ ...kathaForm, event_date: e.target.value })} required />
                  <Input placeholder="Location" value={kathaForm.location} onChange={(e) => setKathaForm({ ...kathaForm, location: e.target.value })} required />
                  <select
                    value={kathaForm.status}
                    onChange={(e) => setKathaForm({ ...kathaForm, status: e.target.value })}
                    className="w-full h-10 rounded-md border border-input bg-background px-3 text-sm"
                  >
                    <option value="upcoming">Upcoming</option>
                    <option value="completed">Completed</option>
                    <option value="cancelled">Cancelled</option>
                  </select>
                  <div className="flex gap-2">
                    <Button type="submit" className="flex-1 bg-cta-gradient rounded-full">
                      <Plus className="w-4 h-4 mr-1" />
                      {editingKatha ? "Update" : "Add"}
                    </Button>
                    {editingKatha && (
                      <Button type="button" variant="outline" className="rounded-full" onClick={() => { setEditingKatha(null); setKathaForm({ title: "", description: "", event_date: "", location: "", status: "upcoming" }); }}>
                        Cancel
                      </Button>
                    )}
                  </div>
                </form>
              </div>

              {/* List */}
              <div className="lg:col-span-2 space-y-4">
                {kathas.length === 0 ? (
                  <div className="text-center py-16 text-muted-foreground">No kathas yet. Add your first one!</div>
                ) : (
                  kathas.map((k) => (
                    <div key={k.id} className="bg-card rounded-2xl p-5 border border-border/30 flex items-center justify-between gap-4">
                      <div className="flex-1 min-w-0">
                        <h3 className="font-heading font-bold text-foreground truncate">{k.title}</h3>
                        <p className="text-sm text-muted-foreground">{k.location} · {new Date(k.event_date).toLocaleDateString()}</p>
                      </div>
                      <span className={`text-xs font-semibold px-3 py-1 rounded-full shrink-0 ${
                        k.status === "upcoming" ? "bg-primary/10 text-primary" : "bg-muted text-muted-foreground"
                      }`}>
                        {k.status}
                      </span>
                      <div className="flex gap-1 shrink-0">
                        <Button size="icon" variant="ghost" onClick={() => editKatha(k)}>
                          <Edit2 className="w-4 h-4" />
                        </Button>
                        <Button size="icon" variant="ghost" onClick={() => deleteKatha(k.id)} className="text-destructive hover:text-destructive">
                          <Trash2 className="w-4 h-4" />
                        </Button>
                      </div>
                    </div>
                  ))
                )}
              </div>
            </div>
          )}

          {activeTab === "resources" && (
            <div className="grid lg:grid-cols-3 gap-8">
              <div className="lg:col-span-1">
                <form onSubmit={saveResource} className="bg-card rounded-3xl p-6 border border-border/30 shadow-lg space-y-4">
                  <h2 className="font-heading font-bold text-lg text-foreground">
                    {editingResource ? "Edit Resource" : "Add New Resource"}
                  </h2>
                  <Input placeholder="Title" value={resourceForm.title} onChange={(e) => setResourceForm({ ...resourceForm, title: e.target.value })} required />
                  <Textarea placeholder="Description" value={resourceForm.description} onChange={(e) => setResourceForm({ ...resourceForm, description: e.target.value })} />
                  <select
                    value={resourceForm.type}
                    onChange={(e) => setResourceForm({ ...resourceForm, type: e.target.value })}
                    className="w-full h-10 rounded-md border border-input bg-background px-3 text-sm"
                  >
                    <option value="pdf">PDF</option>
                    <option value="video">Video</option>
                    <option value="audio">Audio</option>
                  </select>
                  <Input placeholder="URL (YouTube link or PDF link)" value={resourceForm.url} onChange={(e) => setResourceForm({ ...resourceForm, url: e.target.value })} required />
                  <div className="flex gap-2">
                    <Button type="submit" className="flex-1 bg-cta-gradient rounded-full">
                      <Plus className="w-4 h-4 mr-1" />
                      {editingResource ? "Update" : "Add"}
                    </Button>
                    {editingResource && (
                      <Button type="button" variant="outline" className="rounded-full" onClick={() => { setEditingResource(null); setResourceForm({ title: "", description: "", type: "pdf", url: "" }); }}>
                        Cancel
                      </Button>
                    )}
                  </div>
                </form>
              </div>

              <div className="lg:col-span-2 space-y-4">
                {resources.length === 0 ? (
                  <div className="text-center py-16 text-muted-foreground">No resources yet. Add your first one!</div>
                ) : (
                  resources.map((r) => {
                    const Icon = r.type === "video" ? Video : r.type === "audio" ? Music : FileText;
                    return (
                      <div key={r.id} className="bg-card rounded-2xl p-5 border border-border/30 flex items-center justify-between gap-4">
                        <div className="flex items-center gap-3 flex-1 min-w-0">
                          <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                            <Icon className="w-5 h-5 text-primary" />
                          </div>
                          <div className="min-w-0">
                            <h3 className="font-heading font-bold text-foreground truncate">{r.title}</h3>
                            <p className="text-xs text-muted-foreground truncate">{r.url}</p>
                          </div>
                        </div>
                        <span className="text-xs font-semibold px-3 py-1 rounded-full bg-primary/10 text-primary shrink-0">
                          {r.type.toUpperCase()}
                        </span>
                        <div className="flex gap-1 shrink-0">
                          <Button size="icon" variant="ghost" onClick={() => editResource(r)}>
                            <Edit2 className="w-4 h-4" />
                          </Button>
                          <Button size="icon" variant="ghost" onClick={() => deleteResource(r.id)} className="text-destructive hover:text-destructive">
                            <Trash2 className="w-4 h-4" />
                          </Button>
                        </div>
                      </div>
                    );
                  })
                )}
              </div>
            </div>
          )}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default AdminPage;
