# CodeChef MIT-ADT Chapter 🚀

![CodeChef Logo](./CodeChef%20New%20Logo%2024-25.png)

Welcome to the official repository for the **CodeChef MIT-ADT Chapter** website. We are a community of passionate developers, competitive programmers, and tech enthusiasts dedicated to fostering a culture of algorithmic thinking and software engineering excellence.

## 🌟 Overview

This platform serves as the central hub for our chapter's activities, members, and events. It is built to be fast, responsive, and easy to navigate with a modern, glassmorphic UI.

### Features
*   **Dynamic Theme Toggling:** Seamlessly switch between dark and light modes.
*   **Premium Member Dashboard:** A high-fidelity authenticated dashboard integrating Supabase.
*   **Live Event Showcasing:** Keep track of upcoming workshops, hackathons, and competitions.
*   **Interactive Team Portfolio:** Browse through our advisors, alumni, and current core team.

## 🛠️ Technology Stack

*   **Frontend core:** HTML5, Modern CSS3 (Variables, Grid, Flexbox, Animations), Vanilla JavaScript.
*   **Authentication:** [Supabase](https://supabase.com/) (PostgreSQL + JWT Auth natively run in browser).
*   **Icons & Typography:** FontAwesome, Google Fonts (`Outfit`, `Poppins`).
*   **Hosting:** Vercel (Auto-deployed raw static files for maximum speed).

## 🚀 Getting Started Locally

Running this project locally is incredibly straightforward because it runs natively in any standard web server.

### Prerequisites
*   [Node.js](https://nodejs.org/) installed (for the local server package).

### Setup Instructions

1.  **Clone the Repository**
    ```bash
    git clone https://github.com/pranavgawaii/CodeChef_Website.git
    cd CodeChef_Website
    ```

2.  **Install Local Server Tools**
    ```bash
    npm install
    ```

3.  **Setup Environment Variables**
    To use the authentication flow, create a `.env` file at the root:
    ```env
    SUPABASE_URL=your_supabase_url_here
    SUPABASE_ANON_KEY=your_supabase_anon_key_here
    ```

4.  **Run the Server**
    ```bash
    npm start
    # The app will be available at http://localhost:3000
    ```

## 🔐 Supabase Configuration Guide

To power the login and signup flows, configure your Supabase SQL instance with the following snippet:

```sql
-- Create a table for public profiles
create table public.profiles (
  id uuid references auth.users not null primary key,
  role text default 'member' check (role in ('member', 'admin', 'lead')),
  created_at timestamp with time zone default timezone('utc'::text, now()) not null
);

-- Turn on Row Level Security (RLS)
alter table public.profiles enable row level security;
create policy "Public profiles are viewable by everyone." on profiles for select using (true);
create policy "Users can insert their own profile." on profiles for insert with check (auth.uid() = id);

-- Create a signup trigger to auto-populate profiles
create function public.handle_new_user()
returns trigger as $$
begin
  insert into public.profiles (id, role)
  values (new.id, 'member');
  return new;
end;
$$ language plpgsql security definer;

create trigger on_auth_user_created
  after insert on auth.users
  for each row execute procedure public.handle_new_user();
```

## 🤝 Contribution Guidelines

We welcome contributions from everyone! Whether you find a bug, want to add a feature, or improve the documentation, feel free to open a Pull Request.

1.  Fork the repository.
2.  Create your feature branch (`git checkout -b feature/AmazingFeature`).
3.  Commit your changes (`git commit -m 'feat: added some AmazingFeature'`).
4.  Push to the branch (`git push origin feature/AmazingFeature`).
5.  Open a Pull Request.

## 📄 License

This project is open-source and available under the standard MIT License.

---
*Built with ❤️ by the CodeChef MIT-ADT Team.*
