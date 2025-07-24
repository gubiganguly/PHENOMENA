"use client";

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Form, FormControl, FormField, FormItem, FormMessage } from '@/components/ui/form';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { Beams } from '@/components/reactbits';

const formSchema = z.object({
  email: z.string().email({
    message: "Please enter a valid email address.",
  }),
});

export function EmailCaptureSection() {
  const [isSubmitted, setIsSubmitted] = useState(false);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
    setIsSubmitted(true);
    
    // Reset after 3 seconds
    setTimeout(() => {
      setIsSubmitted(false);
      form.reset();
    }, 3000);
  }

  return (
    <section className="relative bg-black py-32 overflow-hidden">
      <div className="absolute inset-0">
        <Beams
          beamWidth={3}
          beamHeight={15}
          beamNumber={12}
          lightColor="#ffffff"
          speed={2}
          noiseIntensity={1.75}
          scale={0.2}
          rotation={0}
        />
      </div>
      <div className="container mx-auto px-8 max-w-4xl relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h2 className="text-6xl md:text-8xl font-bold tracking-tighter text-white mb-8" style={{ fontFamily: '"Helvetica Neue", Helvetica, Arial, sans-serif', fontWeight: 'bold' }}>
            JOIN THE ELITE
          </h2>
          <p className="text-xl text-white/60 mb-16 max-w-2xl mx-auto leading-relaxed">
            Exclusive access to the world's most influential network. 
            Invitations are limited and by application only.
          </p>

          {!isSubmitted ? (
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormControl>
                          <div className="flex flex-col md:flex-row gap-4 max-w-2xl mx-auto">
                            <motion.div
                              whileHover={{ scale: 1.02 }}
                              className="flex-1"
                            >
                              <Input
                                placeholder="your.email@domain.com"
                                {...field}
                                className="h-16 text-lg bg-white/5 border-white/20 text-white placeholder:text-white/40 focus:border-white/60 transition-all duration-300"
                              />
                            </motion.div>
                            <motion.div
                              whileHover={{ scale: 1.05 }}
                              whileTap={{ scale: 0.95 }}
                            >
                              <Button 
                                type="submit"
                                className="h-16 px-12 text-lg bg-white text-black hover:bg-white/90 transition-all duration-300 tracking-wider"
                              >
                                REQUEST ACCESS
                              </Button>
                            </motion.div>
                          </div>
                        </FormControl>
                        <FormMessage className="text-white/60" />
                      </FormItem>
                    )}
                  />
                </form>
              </Form>

              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.8 }}
                className="text-sm text-white/40 mt-8 tracking-wider"
              >
                BY INVITATION ONLY • APPLICATIONS REVIEWED QUARTERLY
              </motion.p>
            </motion.div>
          ) : (
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              className="text-center"
            >
              <div className="w-16 h-16 border-2 border-white rounded-full flex items-center justify-center mx-auto mb-8">
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 0.3 }}
                  className="w-8 h-8 bg-white rounded-full"
                ></motion.div>
              </div>
              <h3 className="text-3xl font-bold text-white mb-4">
                APPLICATION RECEIVED
              </h3>
              <p className="text-white/60">
                You will be contacted if selected for the next phase.
              </p>
            </motion.div>
          )}
        </motion.div>
      </div>
    </section>
  );
} 