// Supabase > Project Settings > API
// La publishable key es pública por diseño: la protección real está en las políticas RLS de la base de datos
const SUPABASE_URL = "https://tqgznekmotblpyyyksqn.supabase.co";
const SUPABASE_KEY = "sb_publishable_vga8U6vp2CoddppuZ0FJhw_8p9ooRD8";

// WhatsApp del negocio: código de país + número, sin + ni espacios
// (también se puede cambiar desde el panel admin > Personalización)
const WHATSAPP = "573207249502";

// Nombre del negocio: se usa en el título de las páginas y en el mensaje de WhatsApp. CÁMBIALO AQUÍ.
const BUSINESS = "Para ellas";
// Ciudad para el mapa de domicilios del panel admin
const CITY = "Caldas, Colombia";
// Iniciales que se muestran cuando un producto no tiene foto
const INITIALS = BUSINESS.split(/\s+/).map((w) => w[0]).join("").slice(0, 2).toUpperCase();
