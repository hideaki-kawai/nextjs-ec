// import Book from "./components/Book";
// import { BookType, Purchase } from "./types/types";
// import { getAllBooks } from "./lib/microcms/client";
// import { getServerSession } from "next-auth";
// import { nextAuthOptions } from "./lib/next-auth/options";
import { Book } from '@/components/Book';
import { getAllBooks } from '@/lib/microcms/client';
import { BookType } from '@/types/types';
import { Suspense } from 'react';
// import Loading from "./loading";
// import { getServerSession } from "next-auth";
// import { nextAuthOptions } from "./lib/next-auth/options";

export default async function Home() {
  const { contents } = await getAllBooks();

  // const [books, setBooks] = useState<BookType[]>([]);
  // const [purchasedBookIds, setPurchasedBookIds] = useState<number[]>([]);

  // const session = await getServerSession(nextAuthOptions);
  // const user: any = session?.user;

  // const { contents } = await getAllBooks();
  // const response = await fetch(
  //   `${process.env.NEXT_PUBLIC_API_URL}/purchases/${user.id}`
  // );
  // const purchasesData = await response.json();
  // const purchasedIds = purchasesData.map(
  //   (purchase: Purchase) => purchase.bookId
  // );
  // const { data: session } = useSession();
  // const user: any = session?.user;

  // useEffect(() => {
  //   const fetchBooksAndPurchases = async () => {
  //     try {
  //       // 書籍データの取得
  //       const booksData = await getAllBooks();
  //       setBooks(booksData.contents);

  //       // ユーザーの購入履歴の取得
  //       if (user && user.id) {
  //         const response = await fetch(
  //           `${process.env.NEXT_PUBLIC_API_URL}/purchases/${user.id}`
  //         );
  //         const purchasesData = await response.json();
  //         const purchasedIds = purchasesData.map(
  //           (purchase: Purchase) => purchase.bookId
  //         );
  //         setPurchasedBookIds(purchasedIds);
  //       }
  //     } catch (error) {
  //       console.error("Error fetching data:", error);
  //     }
  //   };

  //   fetchBooksAndPurchases();
  // }, [user]);

  return (
    <>
      <main className="flex flex-wrap justify-center items-center md:mt-20 mt-20">
        <h2 className="text-center w-full font-bold text-3xl mb-2">
          Book Commerce
        </h2>
        {contents.map(book => (
          <Book key={book.id} book={book} user="" isPurchased={false} />
        ))}
      </main>
    </>
  );
}
