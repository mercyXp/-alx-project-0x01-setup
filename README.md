# REACT ARCHITECT: Mastering Advanced Structures in Next.js

## Table of Contents
1. [Project Setup](#0-project-setup)
2. [Navigation Implementation](#1-navigation-implementation)
3. [Posts Components](#2-posts-components)
4. [Users Components](#3-users-components)
5. [Post Modal Extension](#4-post-modal-extension)
6. [User Modal Implementation](#5-user-modal-implementation)

---

## 0. Project Setup
**Objective**: Set up a base Next.js application with TypeScript and Tailwind CSS.

### Setup Instructions
1. Create project:
   ```bash
   npx create-next-app@latest alx-project-0x01 --typescript
   ```
2. Configuration:
   - Select **Yes** for:
     - ESLint
     - Tailwind CSS
     - Import alias
3. Update global styles:
   ```css
   /* styles/global.css */
   @tailwind base;
   @tailwind components;
   @tailwind utilities;
   ```
4. Create initial page:
   ```tsx
   /* pages/index.tsx */
   const Home: React.FC = () => {
     return (
       <div className="flex justify-center items-center h-screen">
         <h1 className="text-7xl font-thin">Welcome Page</h1>
       </div>
     )
   }
   export default Home;
   ```

**Repository**:
- GitHub repository: `alx-project-0x01-setup`
- Directory: `alx-project-0x01`
- Files:
  - `styles/global.css`
  - `pages/index.tsx`
  - `components/common/Button.tsx`
  - `components/common/PostCard.tsx`
  - `components/layout/Header.tsx`
  - `components/layout/Footer.tsx`
  - `pages/posts/index.tsx`
  - `pages/users/index.tsx`

---

## 1. Navigation Implementation
**Objective**: Implement multi-page navigation system.

### Instructions
1. Create Header component:
   ```tsx
   /* components/layout/Header.tsx */
   import Link from 'next/link';

   const Header: React.FC = () => {
     return (
       <header className="bg-blue-600 text-white shadow-md py-4">
         <div className="container mx-auto flex justify-between items-center px-4">
           <h3 className="font-bold text-2xl">
             <Link href="/">Daily Contents</Link>
           </h3>
           <nav>
             <ul className="flex space-x-6">
               <li className="hover:underline">
                 <Link href="/posts">Posts</Link>
               </li>
               <li className="hover:underline">
                 <Link href="/users">Users</Link>
               </li>
             </ul>
           </nav>
         </div>
       </header>
     );
   }
   ```
2. Update home page:
   ```tsx
   /* pages/index.tsx */
   import Header from "@/components/layout/Header";

   const Home: React.FC = () => {
     return (
       <div className="flex flex-col h-screen">
         <Header />
         <main className="flex-grow flex items-center justify-center bg-gradient-to-r from-blue-500 to-purple-600">
           {/* Content remains same */}
         </main>
       </div>
     )
   }
   ```

**Files Modified**:
- `components/layout/Header.tsx`
- `pages/index.tsx`
- `pages/posts/index.tsx`
- `pages/users/index.tsx`

---

## 2. Posts Components
**Objective**: Implement post display functionality.

### Instructions
1. Create Post interface:
   ```ts
   /* interfaces/index.ts */
   export interface PostProps {
     userId: number;
     id: number;
     title: string;
     body: string;
   }
   ```
2. Create PostCard component:
   ```tsx
   /* components/common/PostCard.tsx */
   const PostCard: React.FC<PostProps> = ({ title, body, userId, id }) => {
     return (
       <div className="max-w-xl mx-auto my-6 p-6 bg-white rounded-lg shadow-lg">
         <h2 className="text-2xl font-semibold text-gray-800">{title}</h2>
         <p className="text-gray-600">{body}</p>
         <div className="mt-4 flex items-center justify-between text-sm text-gray-500">
           <span>User ID: {userId}</span>
           <span>Post ID: {id}</span>
         </div>
       </div>
     );
   };
   ```
3. Implement posts page:
   ```tsx
   /* pages/posts/index.tsx */
   export async function getStaticProps() {
     const response = await fetch("https://jsonplaceholder.typicode.com/posts")
     const posts = await response.json()
     return { props: { posts } }
   }
   ```

**Files Modified**:
- `pages/posts/index.tsx`
- `components/common/PostCard.tsx`
- `interfaces/index.ts`

---

## 3. Users Components
**Objective**: Implement user display functionality.

### Instructions
1. Create User interface:
   ```ts
   /* interfaces/index.ts */
   export interface UserProps {
     id: number;
     name: string;
     username: string;
     email: string;
     address: {
       street: string;
       suite: string;
       city: string;
       zipcode: string;
       geo: { lat: string; lng: string };
     };
     // ...other fields
   }
   ```
2. Create UserCard component (be creative with styling)
3. Implement users page with data fetching:
   ```tsx
   /* pages/users/index.tsx */
   export async function getStaticProps() {
     const response = await fetch("https://jsonplaceholder.typicode.com/users")
     const users = await response.json()
     return { props: { users } }
   }
   ```

**Files Created**:
- `components/common/UserCard.tsx`
- Updates to `interfaces/index.ts`
- Updates to `pages/users/index.tsx`

---

## 4. Post Modal Extension
**Objective**: Add post creation functionality.

### Instructions
1. Create PostModal interfaces:
   ```ts
   /* interfaces/index.ts */
   export interface PostData {
     userId: number;
     id?: number;
     title: string;
     body: string;
   }

   export interface PostModalProps {
     onClose: () => void;
     onSubmit: (post: PostData) => void;
   }
   ```
2. Implement PostModal component:
   ```tsx
   /* components/common/PostModal.tsx */
   const PostModal: React.FC<PostModalProps> = ({ onClose, onSubmit }) => {
     const [post, setPost] = useState<PostData>({
       userId: 1,
       title: "",
       body: ""
     });
     // ...form handling logic
   };
   ```
3. Add modal to posts page:
   ```tsx
   /* pages/posts/index.tsx */
   const [isModalOpen, setModalOpen] = useState(false);
   // ...modal toggle logic
   ```

**Files Created**:
- `components/common/PostModal.tsx`
- Updates to `interfaces/index.ts`
- Updates to `pages/posts/index.tsx`

---

## 5. User Modal Implementation
**Objective**: Add user creation functionality.

### Instructions
1. Create UserModal interfaces based on UserProps
2. Implement UserModal component (similar to PostModal)
3. Add modal to users page with proper form handling

**Files Created**:
- `components/common/UserModal.tsx`
- Updates to `interfaces/index.ts`
- Updates to `pages/users/index.tsx`

---

**Repository**: [alx-project-0x01-setup](https://github.com/yourusername/alx-project-0x01-setup)  
**Directory**: `alx-project-0x01`