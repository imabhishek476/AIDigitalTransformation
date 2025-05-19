import { useEffect, useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import { motion } from 'framer-motion';
import { fadeInUp } from '@/lib/animations';
import { 
  Table, 
  TableBody, 
  TableCaption, 
  TableCell, 
  TableHead, 
  TableHeader, 
  TableRow 
} from '@/components/ui/table';
import { format } from 'date-fns';
import { ContactSubmission } from '@shared/schema';

const AdminDashboard = () => {
  const [searchTerm, setSearchTerm] = useState('');
  
  useEffect(() => {
    document.title = 'Admin Dashboard | Nexus Digital';
  }, []);
  
  const { data: submissions = [], isLoading, isError, error } = useQuery<ContactSubmission[]>({
    queryKey: ['/api/contact-submissions'],
    refetchInterval: 30000, // Auto refresh every 30 seconds
  });
  
  // Filter submissions based on search term
  const filteredSubmissions = submissions.filter((submission) => {
    const searchTermLower = searchTerm.toLowerCase();
    return (
      submission.name.toLowerCase().includes(searchTermLower) ||
      submission.email.toLowerCase().includes(searchTermLower) ||
      submission.company.toLowerCase().includes(searchTermLower) ||
      submission.service.toLowerCase().includes(searchTermLower) ||
      submission.message.toLowerCase().includes(searchTermLower)
    );
  });
  
  return (
    <div className="py-20 bg-white">
      <motion.div 
        variants={fadeInUp}
        initial="hidden"
        animate="visible"
        className="container mx-auto px-4 sm:px-6 lg:px-8"
      >
        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-2">Admin Dashboard</h1>
          <p className="text-gray-600">
            View and manage contact form submissions from your website.
          </p>
        </div>
        
        <div className="mb-6">
          <input
            type="text"
            placeholder="Search submissions..."
            className="w-full md:w-1/3 p-2 border border-gray-300 rounded-md"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
        
        {isLoading ? (
          <div className="text-center py-8">
            <div className="inline-block w-6 h-6 border-2 border-t-primary rounded-full animate-spin"></div>
            <p className="mt-2 text-gray-600">Loading submissions...</p>
          </div>
        ) : isError ? (
          <div className="text-center py-8 text-red-500">
            <p>Error loading submissions: {(error as Error)?.message || 'Unknown error'}</p>
          </div>
        ) : submissions.length === 0 ? (
          <div className="text-center py-8 bg-gray-50 rounded-lg">
            <p className="text-gray-600">No contact form submissions yet.</p>
          </div>
        ) : (
          <div className="overflow-x-auto">
            <Table>
              <TableCaption>
                A list of all contact form submissions.
                {searchTerm && filteredSubmissions.length > 0 && (
                  <span> Showing {filteredSubmissions.length} of {submissions.length} submissions.</span>
                )}
              </TableCaption>
              <TableHeader>
                <TableRow>
                  <TableHead>Date</TableHead>
                  <TableHead>Name</TableHead>
                  <TableHead>Email</TableHead>
                  <TableHead>Company</TableHead>
                  <TableHead>Service</TableHead>
                  <TableHead className="w-[300px]">Message</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {(filteredSubmissions.length > 0 ? filteredSubmissions : submissions).map((submission) => (
                  <TableRow key={submission.id}>
                    <TableCell>
                      {submission.createdAt 
                        ? format(new Date(submission.createdAt), 'MMM d, yyyy h:mm a') 
                        : 'N/A'}
                    </TableCell>
                    <TableCell>{submission.name}</TableCell>
                    <TableCell>{submission.email}</TableCell>
                    <TableCell>{submission.company}</TableCell>
                    <TableCell>
                      <span className="capitalize">
                        {submission.service.replace(/-/g, ' ')}
                      </span>
                    </TableCell>
                    <TableCell className="max-w-[300px] truncate">
                      <span title={submission.message}>
                        {submission.message}
                      </span>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        )}
      </motion.div>
    </div>
  );
};

export default AdminDashboard;